import time
import random

sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Python programming is fun and rewarding.",
    "Practice makes perfect.",
    "Hello world! This is a typing test.",
    "ChatGPT can help you learn coding."
]

def typing_test():
    sentence = random.choice(sentences)
    print("Type the following sentence as fast and accurately as you can:\n")
    print(sentence)
    input("Press Enter when ready...")

    start = time.time()
    typed = input()
    end = time.time()

    time_taken = end - start
    words = len(sentence.split())
    wpm = (words / time_taken) * 60

    if typed.strip() == sentence:
        print(f"\nGreat job! Your typing speed is {wpm:.2f} words per minute.")
    else:
        print("\nOops! The typed sentence did not match exactly.")
        print(f"Your typing speed (if correct) would be {wpm:.2f} WPM.")

if __name__ == "__main__":
    typing_test()
