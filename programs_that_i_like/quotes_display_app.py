import random


def display_random_quote():
    quotes = [
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
    ]

    quote = random.choice(quotes)
    print("\nHere's your motivational quote:\n")
    print(quote)


if __name__ == "__main__":
    display_random_quote()
