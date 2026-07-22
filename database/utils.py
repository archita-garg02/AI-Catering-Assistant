# database/utils.py

import pandas as pd


def clean_text(value):
    """
    Remove extra spaces.
    """

    if pd.isna(value):
        return ""

    return str(value).strip()


def convert_rating(value):
    """
    Convert rating into float.
    """

    try:
        return float(value)
    except:
        return None


def split_guest_capacity(capacity):
    """
    Convert

    100-500

    into

    (100,500)
    """

    try:

        minimum, maximum = capacity.split("-")

        return int(minimum), int(maximum)

    except:

        return None, None


def normalize_budget(value):
    """
    Standardize budget values.
    """

    if not value:
        return ""

    value = value.strip().lower()

    mapping = {
        "premium": "Premium",
        "mid-range": "Mid-Range",
        "budget": "Budget"
    }

    return mapping.get(value, value.title())


def normalize_status(value):
    """
    Standardize status.
    """

    if not value:
        return ""

    return value.strip().title()