contacts = {}

def add_contact():
    name = input("Enter contact name: ")
    phone = input("Enter phone number: ")
    contacts[name] = phone
    print(f"Contact '{name}' added.")

def view_contacts():
    if contacts:
        print("\nYour Contacts:")
        for name, phone in contacts.items():
            print(f"{name}: {phone}")
    else:
        print("No contacts found.")

def delete_contact():
    name = input("Enter the name of the contact to delete: ")
    if name in contacts:
        del contacts[name]
        print(f"Contact '{name}' deleted.")
    else:
        print(f"No contact found with the name '{name}'.")

def main():
    while True:
        print("\nContact Book Menu:")
        print("1. Add contact")
        print("2. View contacts")
        print("3. Delete contact")
        print("4. Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            add_contact()
        elif choice == "2":
            view_contacts()
        elif choice == "3":
            delete_contact()
        elif choice == "4":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()
