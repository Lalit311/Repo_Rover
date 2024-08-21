# Auto NBA

## Description
Project Description

## Installation (Running the Project)

* Create a python virtual environment using `venv`.

    * For MacOS

        ```bash
        $ python3 -m venv auto-nba-env
        ```

    * For Windows

        ```bash
        $ python -m venv auto-nba-env
        ```

    > Note: If required, replace `auto-nba-env` with your desired virtual environment name.

* Activate the virtual environment

    * For MacOS

        ```bash
        $ source auto-nba-env/bin/activate
        ```

    * For Windows

        ```bash
        $ source auto-nba-env/Scripts/activate
        ```

* Install the required packages

    ```bash
    $ pip install -r requirements.txt
    ```

* Run the application

    ```bash
    $ uvicorn main:app
    ```

Once the app is running you will the following message in the terminal

```bash
INFO: Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

You can then access the API documents through the following links:

- http://localhost:8000/docs [API docs by Swagger]
- http://localhost:8000/redoc [API docs by Redocly]

## Authors and acknowledgment

This repository is created and maintained by:

* Amit Pathak [amit-pathak-ps]
* [Add Your Names]

## License
NA
