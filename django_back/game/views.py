from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from game.map_controller import Map

class GameView(APIView):
    
    def get(self, request):
        new_map = Map()
        complite_map = new_map.get_complite_map(request.GET.get('level'))
        uncomplite_map = new_map.get_uncomplite_map(complite_map, 1)
        return Response({'uncomplite_map': uncomplite_map})

    def post(self, request):
        return Response({"status": "error", "data": "get not allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)