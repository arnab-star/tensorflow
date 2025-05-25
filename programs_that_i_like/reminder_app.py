import time

def set_reminder():
    reminder = input("What should I remind you about? ")
    minutes = int(input("In how many minutes? "))

    print(f"Okay! I’ll remind you in {minutes} minutes...")
    time.sleep(minutes * 60)  # Convert minutes to seconds

    print("\n🔔 Reminder: " + reminder)

if __name__ == "__main__":
    set_reminder()
