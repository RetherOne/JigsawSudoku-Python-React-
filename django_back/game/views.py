from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from game.map_controller import Map
from django.shortcuts import HttpResponse


class StartGameView(APIView):
    
    def get(self, request):
        new_map = Map()
        login = request.GET.get('login')
        print(request.session.items())
        request.session[login] = {}
        request.session[login]['map'] = new_map.get_complite_map(request.GET.get('level'))
        request.session.modified = True
        # uncomplite_map = new_map.get_uncomplite_map(request.session['session'], 1)
        # return Response({'uncomplite_map': uncomplite_map})
        return HttpResponse("GOOD")

    def post(self, request):
        return Response({"status": "error", "data": "get not allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

class PlayGameView(APIView):

    def get(self, request):
        if request.session.test_cookie_worked():
            request.session.delete_test_cookie()
            print("work")
        else:
            print("not work")
        # print("sesion: ")
        # print(request.session[GAME_NAME])

        return HttpResponse("GOOD")