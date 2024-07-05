from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

class UserView(APIView):
    def get(self, request, *args, **kwargs):
        result = User.objects.all()
        serializer = UserSerializer(result, many=True)
        return Response({'status': 'success', "users":serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        print(User.objects.all())
        if serializer.is_valid():
            if serializer.validated_data['email'] == "":
                serializer.validated_data['email'] = None
            if User.objects.filter(email=serializer.validated_data['email']).exists():
                return Response({"status": "error", "data": "email_exist"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
            if User.objects.filter(login=serializer.validated_data['login']).exists():
                return Response({"status": "error", "data": "login_exist"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)