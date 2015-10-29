from pyramid.httpexceptions import HTTPFound, HTTPNotFound
from pyramid.view import view_config, notfound_view_config


class MySite:
    def __init__(self, request):
        self.request = request

    @view_config(route_name='login', renderer='json')
    def loin(self):
        return dict()
