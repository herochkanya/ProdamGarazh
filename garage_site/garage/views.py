from django.shortcuts import render
import os

def index(request):
    # Шлях до папки з фотографіями
    images_folder = os.path.join('static', 'images')
    # Шлях до папки з відео
    videos_folder = os.path.join('static', 'videos')
    
    # Отримуємо список файлів із папок
    images = [f for f in os.listdir(images_folder) if f.endswith(('.jpg', '.jpeg', '.png'))]
    videos = [f for f in os.listdir(videos_folder) if f.endswith('.mp4')]

    # Передаємо в шаблон
    return render(request, 'index.html', {'images': images, 'videos': videos})
