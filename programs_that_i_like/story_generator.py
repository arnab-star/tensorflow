def create_story():
    name = input("Enter a name: ")
    place = input("Enter a place: ")
    animal = input("Enter an animal: ")
    object = input("Enter an object: ")
    emotion = input("Enter an emotion: ")

    story = f"""
    One day, {name} was walking through {place} when they saw a {animal} holding a {object}.
    Surprised and feeling very {emotion}, {name} decided to follow it.
    What happened next? Nobody knows. But that was the start of a very strange adventure...
    """

    print("\nHere's your story:")
    print(story)

if __name__ == "__main__":
    create_story()
