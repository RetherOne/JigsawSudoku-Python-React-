# Generated by Django 5.0.6 on 2024-07-05 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_alter_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(blank=True, default=None, max_length=50, null=True, unique=True),
        ),
    ]
