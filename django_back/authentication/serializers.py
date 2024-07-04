from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    # first_name = serializers.CharField(max_length=30)
    # last_name = serializers.CharField(max_length=30)
    # login = serializers.CharField(max_length=30)
    # password = serializers.CharField(max_length=30)
    # email = serializers.CharField(required=False, max_length=50)
    # birthday = serializers.DateField()

    # def create(self, validated_data):
    #     return User.objects.create(**validated_data)
    
    # def update(self, instance, validated_data):
    #     instance.first_name = validated_data.get("first_name", instance.first_name)
    #     instance.last_name = validated_data.get("last_name", instance.last_name)
    #     instance.login = validated_data.get("login", instance.login)
    #     instance.password = validated_data.get("password", instance.password)
    #     instance.email = validated_data.get("email", instance.email)
    #     instance.birthday = validated_data.get("birthday", instance.birthday)
    #     instance.save()
    #     return instance
    
    class Meta:
        model = User
        fields = ('__all__')

