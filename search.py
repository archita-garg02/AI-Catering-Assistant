from data_loader import df


def search_by_region(region):
    """
    Search caterers by region.
    """

    results = df[
        df["Region / Zone"].str.contains(
            region,
            case=False,
            na=False
        )
    ]

    return results[
        [
            "Caterer Name",
            "Region / Zone",
            "Budget Tier",
            "Guest Capacity",
            "Rating",
        ]
    ]