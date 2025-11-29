from django.shortcuts import render, redirect
from django.contrib import messages 

# Create your views here.

def HomeView(request):
    return render(request, 'home.html')

def FeaturesView(request):
    return render(request, 'features.html')

def PricingView(request):
    return render(request, 'event.html')

def AboutView(request):
    return render(request, 'about.html')

def MenuView(request):
    return render(request, 'menu.html')

def ContactView(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        
        # You can save to database or send email here
        messages.success(request, "Thank you! Your message has been sent.")
        return redirect("contact")
    return render(request, 'contact.html')