from django.shortcuts import render
from django.contrib.auth.models import User 
from rest_framework import viewsets

from .models import Client,Team,Note
from .serializers import ClientSerializer,NoteSerializer

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class =ClientSerializer
    queryset = Client.objects.all()

    def get_queryset(self):
        team =Team.objects.filter(members__in=[self.request.user]).first()
        return self.queryset.filter(team=team)
    
    def perform_create(self,serializer):
        team =Team.objects.filter(members__in=[self.request.user]).first()
        serializer.save(team=team,created_by=self.request.user)

class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

    def get_queryset(self):
        team =Team.objects.filter(members__in=[self.request.user]).first()
        client_id = request.GET.get('client_id')

        return self.queryset.filter(team=team).filter(client_id=client_id)
    
    def perform_create(self,serializer):
        team =Team.objects.filter(members__in=[self.request.user]).first()
        serializer.save(team=team,created_by=self.request.user)
