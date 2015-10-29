from pyramid.view import view_config


class MySite:
    def __init__(self, request):
        self.request = request

    @view_config(route_name='login', renderer='json')
    def login(self):
        return dict()
