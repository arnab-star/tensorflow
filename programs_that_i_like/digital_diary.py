import datetime


def write_entry():
    entry = input("Write your diary entry:\n")
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open("diary.txt", "a") as file:
        file.write(f"[{timestamp}]\n{entry}\n\n")

    print("Your entry has been saved.")


def view_entries():
    try:
        with open("diary.txt", "r") as file:
            print("\nYour Diary Entries:\n")
            print(file.read())
    except FileNotFoundError:
        print("No diary entries found yet.")


def main():
    while True:
        print("\n--- Digital Diary ---")
        print("1. Write a new entry")
        print("2. View past entries")
        print("3. Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            write_entry()
        elif choice == "2":
            view_entries()
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Try again.")


if __name__ == "__main__":
    main()
