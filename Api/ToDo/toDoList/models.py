from django.db import models

# Create your models here.

class List(models.Model):
    statuses = [
        ('Done', 'Done'),
        ('ToDo', 'ToDo'),
    ]

    listId      = models.AutoField(primary_key=True)
    listTask    = models.TextField()
    listStatus  = models.CharField(
                    max_length= 4,
                    choices = statuses,
                    default= 'ToDo',
                )
    
