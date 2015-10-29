from pyramid.config import Configurator


def main(global_config, **settings):
    config = Configurator(settings=settings)
    config.add_route('login', '/auth/login')
    config.add_static_view(name='static', path='../src')
    config.scan()
    return config.make_wsgi_app()
