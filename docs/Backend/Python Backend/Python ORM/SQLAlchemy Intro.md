# SQLAlchemy Introduction

## What is [SQLAlchemy](https://docs.sqlalchemy.org/en/20/intro.html#overview)

The SQLAlchemy SQL Toolkit and Object Relational Mapper is a comprehensive set of tools for working with databases and Python. It has several distinct areas of functionality which can be used individually or combined together. Its major components are illustrated below, with component dependencies organized into layers:

![_images/sqla_arch_small.png](https://docs.sqlalchemy.org/en/20/_images/sqla_arch_small.png)

Above, the two most significant front-facing portions of SQLAlchemy are the  **Object Relational Mapper (ORM)**  and the  **Core**.

Core contains the breadth of SQLAlchemy’s SQL and database integration and description services, the most prominent part of this being the  **SQL Expression Language**.

The SQL Expression Language is a toolkit all its own, independent of the ORM package, which provides a system of constructing SQL expressions represented by composable objects, which can then be “executed” against a target database within the scope of a specific transaction, returning a result set. Inserts, updates and deletes (i.e.  [DML](https://docs.sqlalchemy.org/en/20/glossary.html#term-DML)) are achieved by passing SQL expression objects representing these statements along with dictionaries that represent parameters to be used with each statement.

## Installation Guide

### Supported Platforms
SQLAlchemy supports the following platforms:

-   cPython 3.7 and higher
-   Python-3 compatible versions of  [PyPy](http://pypy.org/)
    
Changed in version 2.0: SQLAlchemy now targets Python 3.7 and above.


### Supported Installation Methods

SQLAlchemy installation is via standard Python methodologies that are based on  [setuptools](https://pypi.org/project/setuptools/), either by referring to  `setup.py`  directly or by using  [pip](https://pypi.org/project/pip/)  or other setuptools-compatible approaches.

### Install via pip[](https://docs.sqlalchemy.org/en/20/intro.html#install-via-pip "Permalink to this heading")

When  `pip`  is available, the distribution can be downloaded from PyPI and installed in one step:
```bash
pip install SQLAlchemy
```

### Installing manually from the source distribution

When not installing from pip, the source distribution may be installed using the  `setup.py`  script:
```bash
python setup.py install
```