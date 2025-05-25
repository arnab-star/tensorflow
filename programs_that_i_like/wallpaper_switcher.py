import os
import ctypes
import time


def change_wallpaper(image_path):
    # SPI_SETDESKWALLPAPER = 20
    ctypes.windll.user32.SystemParametersInfoW(20, 0, image_path, 3)


def wallpaper_switcher(folder_path, delay_seconds=10):
    if not os.path.exists(folder_path):
        print("Folder does not exist.")
        return

    images = [file for file in os.listdir(folder_path)
              if file.lower().endswith(('.jpg', '.jpeg', '.bmp', '.png'))]

    if not images:
        print("No images found in the folder.")
        return

    print(f"Found {len(images)} images. Starting wallpaper switcher...")

    while True:
        for image in images:
            image_path = os.path.join(folder_path, image)
            print(f"Setting wallpaper: {image}")
            change_wallpaper(image_path)
            time.sleep(delay_seconds)  # Wait before switching to next wallpaper


if __name__ == "__main__":
    folder = input("Enter full path to your wallpaper folder: ")
    delay = int(input("Enter delay between wallpapers in seconds (e.g., 10): "))
    wallpaper_switcher(folder, delay)
