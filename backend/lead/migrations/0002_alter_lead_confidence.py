# Generated by Django 3.2.5 on 2021-07-25 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lead', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='confidence',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
