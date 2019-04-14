from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.include('pyramid_jinja2')
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.add_route('controller', '/controller')
    config.add_route('game_state', '/game_state')
    config.add_route('game_config', '/game_config')
    config.scan()
    return config.make_wsgi_app()
