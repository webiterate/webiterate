---
layout: page
title: Developer
permalink: /developer/api
nav_order: 5
---

# Developer Documentation
We will strive to open up our infrastructure and tooling for other developers to freely and reasonably use. This developer API corpus will grow with time, so please stay tuned! If you'd like,
sign up for our newsletter and notification service to hear of the latest updates, developments and news direct from our team.
{: .fs-6 .fw-300 }
---

{% for api in site.api %}
  <h2>
    <a href="{{ api.url }}">
      {{ api.name }}
    </a>
  </h2>
  <p>{{ api.description }}</p>
  Example usage:
  {: .fs-4 .fw-300 }

  GET 
  {: .fs-2 .fw-500 }
  New
  {: .label .label-purple }

  {% if api.get %}
  ```bash
  curl -H 'Accept: application/json' -X GET {{site.url}}{{api.url}} | python -m json.tool
  ```
  {% else %}
  ```
  Not Implemented
  ```
  {% endif %}

  POST
  {: .fs-2 .fw-500 }
  {% if api.post %}
  ```bash
  curl -H 'Accept: application/json' -X POST -D {} {{site.url}}{{api.url}} | python -m json.tool
  ```
  {% else %}
  ```
  Not Implemented
  ```
  {% endif %}

  PUT
  {: .fs-2 .fw-500 }
  {% if api.put %}
  ```bash
  curl -H 'Accept: application/json' -X PUT -D {} {{site.url}}{{api.url}} | python -m json.tool
  ```
  {% else %}
  ```
  Not Implemented
  ```
  {% endif %}

  DELETE
  {: .fs-2 .fw-500 }
  {% if api.delete %}
  ```bash
  curl -H 'Accept: application/json' -X DELETE -D {} {{site.url}}{{api.url}} | python -m json.tool
  ```
  {% else %}
  ```
  Not Implemented
  ```
  {% endif %}
{% endfor %}