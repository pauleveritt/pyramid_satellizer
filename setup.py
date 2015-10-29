from setuptools import setup

requires = [
    'pyramid',
    'waitress'
]
setup(name='mysite',
      install_requires=requires,
      entry_points="""\
      [paste.app_factory]
      main = mysite:main
      """
      )
