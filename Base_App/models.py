from django.db import models

# Create your models here.


# Order model 
class Order(models.Model):
    
    PLAN_CHOICES = [
        ('starter', 'Starter'),
        ('professional','Professional'),
        ('enterprise',"Enterprise"),
    ]
    
    # ..Personal Information...
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    
    # ..Company Infomation...
    company = models.CharField(max_length=150, null=True, blank=True)
    address=models.TextField()
    
    meet_time = models.DateField(null=True, blank=True)
    
    #...Selected plan..
    plan=models.CharField(max_length=20, choices=PLAN_CHOICES)
    plan_price=models.CharField(max_length=50)
    
    #..Auto fields..
    created_at = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.plan.title()} - {self.created_at.strftime('%Y-%m-%d')}"
