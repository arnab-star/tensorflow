class VirtualPet:
    def __init__(self, name):
        self.name = name
        self.hunger = 5  # 0 = full, 10 = starving
        self.happiness = 5  # 0 = sad, 10 = happy

    def feed(self):
        if self.hunger > 0:
            self.hunger -= 1
            print(f"You fed {self.name}. Hunger level: {self.hunger}")
        else:
            print(f"{self.name} is already full!")

    def play(self):
        if self.happiness < 10:
            self.happiness += 1
            print(f"You played with {self.name}. Happiness level: {self.happiness}")
        else:
            print(f"{self.name} is already very happy!")

    def status(self):
        print(f"\n{self.name}'s Status:")
        print(f"Hunger: {self.hunger}/10 (0 = full, 10 = starving)")
        print(f"Happiness: {self.happiness}/10 (10 = very happy)\n")

def main():
    pet_name = input("What is your pet's name? ")
    pet = VirtualPet(pet_name)

    while True:
        print("What do you want to do?")
        print("1. Feed")
        print("2. Play")
        print("3. Check status")
        print("4. Quit")

        choice = input("Enter choice: ")

        if choice == "1":
            pet.feed()
        elif choice == "2":
            pet.play()
        elif choice == "3":
            pet.status()
        elif choice == "4":
            print(f"Goodbye! Take care of {pet.name}!")
            break
        else:
            print("Invalid choice, try again.")

if __name__ == "__main__":
    main()
