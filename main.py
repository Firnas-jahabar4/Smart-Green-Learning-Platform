# ==========================================================
# File: app.py
# Streamlit Gemini Chatbot – Integrated with Course Selection
# ==========================================================

import os
import streamlit as st
import google.generativeai as genai
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()

# Configure Streamlit page
st.set_page_config(
    page_title="Chat with Gemini",
    page_icon="🧠",
    layout="centered"
)

# Configure Gemini API
api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    st.error("❌ GOOGLE_API_KEY not found in .env file.")
    st.stop()

try:
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-2.0-flash")
except Exception as e:
    st.error(f"⚠ Error initializing Gemini model: {e}")
    st.stop()


# Helper: Map Gemini roles to Streamlit chat message types
def map_role(role):
    return "assistant" if role == "model" else "user"


# Initialize chat session in Streamlit state
if "chat_session" not in st.session_state:
    st.session_state.chat_session = model.start_chat(history=[])


# 🌱 Page title
st.title("🧠 Generative AI Chatbot")


# ==========================================================
# ✅ NEW: Read 'course' parameter from the URL
# ==========================================================
query_params = st.query_params.to_dict()  # ✅ convert to dictionary

if "course" in query_params:
    # 🧩 Get course name safely (works for all Streamlit versions)
    course_title = query_params["course"][0] if isinstance(query_params["course"], list) else query_params["course"]

    # 🎨 Show selected course in a colorful banner box with emoji
    st.markdown(f"""
    <div style="background: linear-gradient(90deg, #e6ffe6, #ccffcc);
                border-left: 6px solid #28a745;
                border-radius: 10px;
                padding: 12px;
                margin-bottom: 15px;
                text-align: center;">
        <h3 style="color: #155724; margin: 0;">🎓 You selected the course: <b>{course_title}</b></h3>
    </div>
    """, unsafe_allow_html=True)

    # 🧠 Send an initial prompt to Gemini (only once)
    if "init_message_sent" not in st.session_state:
        starting_prompt = (
            f"I want to start learning the course '{course_title}'. "
            f"Please begin the first lesson with an interactive explanation or question."
        )

        try:
            response = st.session_state.chat_session.send_message(starting_prompt)
            st.session_state.init_message_sent = True
            st.query_params.clear()  # ✅ prevent repeat on refresh
        except Exception as e:
            st.error(f"Error sending initial message: {e}")


# ==========================================================
# 💬 Display chat history
# ==========================================================
try:
    for message in st.session_state.chat_session.history:
        with st.chat_message(map_role(message.role)):
            st.markdown(message.parts[0].text)
except Exception as e:
    st.error(f"⚠ Error displaying chat: {e}")


# ==========================================================
# 🧍‍♀ User input + Gemini response
# ==========================================================
user_input = st.chat_input("Type your question...")

if user_input:
    st.chat_message("user").markdown(user_input)

    try:
        response = st.session_state.chat_session.send_message(user_input)
        with st.chat_message("assistant"):
            st.markdown(response.text)
    except Exception as e:
        st.error(f"⚠ Gemini error: {e}")