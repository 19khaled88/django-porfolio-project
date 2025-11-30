from django.shortcuts import render, redirect
from django.contrib import messages 
from .models import Order

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

def OrderDefaultView(request):
    return redirect('order', plan='starter')

def OrderView(request,plan):
    plan_data ={
        "starter": ("Starter", "$499"),
        "professional": ("Professional", "$999"),
        "enterprise": ("Enterprise", "$1999"),
    }
    selected = plan_data.get(plan.lower(),("Starter", "$499"))
    
    # PLAN NAME + PRICE (fallback to Starter)
    plan_name, plan_price = plan_data.get(plan.lower(), ("Starter", "$499"))
    
    # -------------------------
    # HANDLE POST REQUEST HERE
    # -------------------------
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        company = request.POST.get("company")
        address = request.POST.get("address")
        meet_time = request.POST.get("meet_time") or None

        # Save to database
        Order.objects.create(
            name=name,
            email=email,
            phone=phone,
            company=company,
            address=address,
            meet_time=meet_time,
            plan=plan.lower(),
            plan_price=plan_price,
        )

        return redirect("home")   # or success page
    
    return render(request, 'order_choose.html',{
        'plan_name':plan_name,
        'plan_price':plan_price
    })

def ContactView(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        
        # You can save to database or send email here
        messages.success(request, "Thank you! Your message has been sent.")
        return redirect("contact")
    return render(request, 'contact.html')