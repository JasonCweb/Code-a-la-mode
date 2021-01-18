import React from 'react';

export default (props) => {

  const srcOpen = props.theme === 'dark' ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGxp6PAzXAAAAs0lEQVQoz4XRMWoCURgE4G8fu9HO1so2pNBTBNQTWKZPbZEzpEqbwkrBM5jFOnUQL6AhhDQhaYRAeCk2iOBbnamGmf9nYDiDzJ3BXs09Hgeib7t/9Wlx4BVmnjPRrcvk97bMiOjDFE1BQy7XEDTBAzlKa1f6Vjq+0LLRtbRVQNR241dM8MdTAGMh2aLwRjRMXle8JprX2q8C0a42cF+VrGfvdOAFNe0rzCBXukja7ybnlgZ/6rltujAhGeEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMDJUMjE6Mjc6MjYrMDI6MDAIaAqjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTAyVDIxOjI3OjI2KzAyOjAweTWyHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=' :
                                            'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8cGF0aCBkPSJNNTcuNDksMjEuNUg1NHYtNi4yNjhjMC0xLjUwNy0xLjIyNi0yLjczMi0yLjczMi0yLjczMkgyNi41MTVsLTUtN0gyLjczMkMxLjIyNiw1LjUsMCw2LjcyNiwwLDguMjMydjQzLjY4N2wwLjAwNiwwICBjLTAuMDA1LDAuNTYzLDAuMTcsMS4xMTQsMC41MjIsMS41NzVDMS4wMTgsNTQuMTM0LDEuNzYsNTQuNSwyLjU2NSw1NC41aDQ0Ljc1OWMxLjE1NiwwLDIuMTc0LTAuNzc5LDIuNDUtMS44MTNMNjAsMjQuNjQ5di0wLjE3NyAgQzYwLDIyLjc1LDU4Ljk0NCwyMS41LDU3LjQ5LDIxLjV6IE0yLDguMjMyQzIsNy44MjgsMi4zMjksNy41LDIuNzMyLDcuNWgxNy43NTNsNSw3aDI1Ljc4MmMwLjQwNCwwLDAuNzMyLDAuMzI4LDAuNzMyLDAuNzMyVjIxLjUgIEgxMi43MzFjLTAuMTQ0LDAtMC4yODcsMC4wMTItMC40MjYsMC4wMzZjLTAuOTczLDAuMTYzLTEuNzgyLDAuODczLTIuMDIzLDEuNzc2TDIsNDUuODk5VjguMjMyeiBNNDcuODY5LDUyLjA4MyAgYy0wLjA2NiwwLjI0NS0wLjI5MSwwLjQxNy0wLjU0NSwwLjQxN0gyLjU2NWMtMC4yNDMsMC0wLjM4NS0wLjEzOS0wLjQ0OC0wLjIyMmMtMC4wNjMtMC4wODItMC4xNi0wLjI1Ni0wLjEyMy0wLjQwOGwxMC4xOTEtMjcuOTUzICBjMC4wNjYtMC4yNDUsMC4yOTEtMC40MTcsMC41NDUtMC40MTdINTRoMy40OWMwLjM4LDAsMC40NzcsMC41NDYsMC41MDIsMC44MTlMNDcuODY5LDUyLjA4M3oiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
  const srcClosed = props.theme === 'dark' ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBgIVGhiNKVy6AAAARElEQVQoz2NkEGCAgT8MXxiwgP9w+INBB1OakeE/Eu8SQzx+BQwMpxn6UPiRTGgaTBhk8JuAAZgYGEYVEKOAESm6sQIA6nkOebiEmT8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMDJUMjE6MjY6MjQrMDI6MDBwNXC0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTAyVDIxOjI2OjI0KzAyOjAwAWjICAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=' :
                                              'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8cGF0aCBkPSJNMjYuNTI1LDEwLjVsLTQuNjE4LTYuNDUxTDIxLjUxNSwzLjVIMHY1M2g2MHYtNDZIMjYuNTI1eiBNNTgsMTIuNXY1SDMxLjUzNmwtMy41NzktNUg1OHogTTIsNTQuNXYtNDloMTguNDg1bDUsN2gwLjAxMiAgbDQuNjksNi41NTFjMC4xOTUsMC4yNzIsMC41MDEsMC40MTcsMC44MTMsMC40MThWMTkuNWgyN3YzNUgyeiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
  return (
    props.visible ?
    <img src={`${srcOpen}`} className="icon directory" />
    :
    <img src={`${srcClosed}`} className="icon directory" />
  );

};