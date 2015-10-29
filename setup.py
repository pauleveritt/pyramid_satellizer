from setuptools import setup

requires = [
    'pyramid',
    'waitress',
    'pyramid_jwtauth'
]
setup(name='mysite',
      install_requires=requires,
      entry_points="""\
      [paste.app_factory]
      main = mysite:main
      """
      )
