# Generated by Django 2.2.16 on 2020-10-31 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dating', '0003_auto_20201031_0550'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='accesibility',
            field=models.TextField(blank=True, null=True),
        ),
    ]