import speech_recognition as sr
import pyttsx3
import os
import webbrowser
import openai
from config import apikey
import datetime
import random
import numpy as np


chatStr = ""
# https://youtu.be/Z3ZAJoi4x6Q
def chat(query):
    global chatStr
    print(chatStr)
    openai.api_key = apikey
    chatStr += f"Ez: {query}\n Pyx: "
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt= chatStr,
        temperature=0.7,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    # todo: Wrap this inside of a  try catch block
    # print("penis")
    print(f'response["choices"][0]["text"] {response["choices"][0]["text"]}')
    # Pyx.say(response["choices"][0]["text"])
    # Pyx.runAndWait()
    chatStr += f"{response['choices'][0]['text']}\n"
    return response["choices"][0]["text"]

def initVoice():
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[1].id)
    return engine

def ai(prompt):
    openai.api_key = apikey
    text = f"OpenAI response for Prompt: {prompt} \n *************************\n\n"

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.7,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    # todo: Wrap this inside of a  try catch block
    # print(response["choices"][0]["text"])
    text += response["choices"][0]["text"]
    if not os.path.exists("Openai"):
        os.mkdir("Openai")

    # with open(f"Openai/prompt- {random.randint(1, 2343434356)}", "w") as f:
    with open(f"Openai/{''.join(prompt.split('intelligence')[1:]).strip() }.txt", "w") as f:
        f.write(text)



def takeCommand():
    # r = sr.Recognizer()
    # with sr.Microphone() as source:
    #     # r.pause_threshold =  0.6
    #     audio = r.listen(source)
    try:
        print("Waiting for input...")
        # query = r.recognize_google(audio, language="en-in")
        query = input()
        print(f"User said: {query}")
        return query
    except Exception as e:
        return "Whoops my bad"

# TODO: MAKE AUDIO OUTPUT OPTIONAL
if __name__ == '__main__':
    print('Welcome to Pyx A.I')
    Pyx = initVoice()
    Pyx.say("Welcome to Pyx A.I")
    Pyx.runAndWait()
    while True:
        print("Type your command")
        Pyx.say("Type your command")
        Pyx.runAndWait()
        query = takeCommand()
        # TODO: ADD LOCAL APPS FIRST IN THE IFELSE CHAIN AND THEN THE DEFAULT WILL BE TO ATTEMPT TO OPEN IT IN THE BROWSER
        # sites = [["youtube", "https://www.youtube.com"], ["wikipedia", "https://www.wikipedia.com"], ["google", "https://www.google.com"],]
        # for site in sites:
        #     if f"Open {site[0]}".lower() in query.lower():
        #         Pyx.say(f"Opening {site[0]} !!")
        #         Pyx.runAndWait()
        #         # webbrowser.open()
        #         webbrowser.open(f"https://www.{site[0]}.com") #this will work for sites with the standard format of domain.
        #                                                         # i wonder if i can add a try catch or maybe just an if else
        # TODO OPEN SPOTIFTY. SPOTIFY API?
        if "open SPOTIFY" in query:
            os.system(f"open {musicPath}")
        # TODO: CHECK THIS
        elif "the time" in query:
            hour = datetime.datetime.now().strftime("%H")
            min = datetime.datetime.now().strftime("%M")
            Pyx.say(f"The time is {hour} {min} minutes")

        #TODO: TEST THIS
        elif "Using artificial intelligence".lower() in query.lower():
            ai(prompt=query)
        #TODO: CHANGE TO WORK WITH A GREATER VARIETY OF PHRASES
        elif "Pyx Quit".lower() in query.lower():
            exit()

        elif "reset chat".lower() in query.lower():
            chatStr = ""

        else:
            print("Chatting...")
            chat(query)





        # say(query)