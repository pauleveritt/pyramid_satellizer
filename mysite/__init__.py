from pyramid.config import Configurator
from pyramid.security import Allow, Everyone


class RootFactory(object):
    __name__ = 'RootFactory'
    __acl__ = [(Allow, Everyone, 'view'),
               (Allow, 'group:editors', 'edit')
               ]

    def __init__(self, request):
        pass


def main (global_config, **settings):
    config = Configurator(settings=settings)

    # Auth
    config.include('pyramid_jwtauth')
    config.set_root_factory(RootFactory)

    config.add_route('login', '/api/login')
    config.add_route('protected', '/api/protected')
    config.add_route('profile', '/api/profile')

    config.add_static_view(name='static', path='../src')
    config.scan('.views')

    return config.make_wsgi_app()
