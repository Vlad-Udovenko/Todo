# Generated by Django 3.1.5 on 2021-01-25 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='List',
            fields=[
                ('listId', models.AutoField(primary_key=True, serialize=False)),
                ('listTask', models.TextField()),
                ('listStatus', models.CharField(choices=[('DO', 'Done'), ('TD', 'ToDo')], default='ToDo', max_length=2)),
            ],
        ),
    ]