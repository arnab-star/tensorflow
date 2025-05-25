import os
import shutil

file_types = {
    "Images": [".jpg", ".jpeg", ".png", ".gif"],
    "Documents": [".pdf", ".docx", ".txt", ".pptx"],
    "Videos": [".mp4", ".mov", ".avi"],
    "Music": [".mp3", ".wav"],
    "Archives": [".zip", ".rar", ".tar"],
    "Others": []
}

def organize_folder(folder_path):
    if not os.path.exists(folder_path):
        print("Folder does not exist.")
        return

    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)

        if os.path.isfile(file_path):
            _, ext = os.path.splitext(filename)
            ext = ext.lower()

            moved = False
            for category, extensions in file_types.items():
                if ext in extensions:
                    target_dir = os.path.join(folder_path, category)
                    os.makedirs(target_dir, exist_ok=True)
                    shutil.move(file_path, os.path.join(target_dir, filename))
                    moved = True
                    break

            if not moved:
                target_dir = os.path.join(folder_path, "Others")
                os.makedirs(target_dir, exist_ok=True)
                shutil.move(file_path, os.path.join(target_dir, filename))

    print("Files have been organized.")

if __name__ == "__main__":
    path = input("Enter the full path of the folder to organize: ")
    organize_folder(path)
