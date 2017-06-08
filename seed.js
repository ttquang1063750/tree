var node = {
  "model": "stacked",
  "type": "stacked-component",
  "children": [
    {
      "model": "userList",
      "type": "table-component",
      "children": [
        {
          "children": [
            {
              "model": "stacked",
              "type": "stacked-component",
              "children": [
                {
                  "type": "paragraph-component",
                  "model": "Name",
                  "properties": {
                    "wrapper": {
                      "classes": [],
                      "styles": [
                        {
                          "name": "flex",
                          "value": "0 1 100%"
                        }
                      ]
                    },
                    "element": {
                      "classes": [],
                      "styles": []
                    }
                  }
                }
              ],
              "properties": {
                "container": {
                  "classes": [
                    "flex_column"
                  ],
                  "styles": [
                    {
                      "name": "flex",
                      "value": "0 1 100%"
                    },
                    {
                      "name": "border",
                      "value": "1px dotted #000"
                    },
                    {
                      "name": "padding",
                      "value": "6px"
                    }
                  ]
                }
              }
            },
            {
              "model": "stacked",
              "type": "stacked-component",
              "children": [
                {
                  "type": "paragraph-component",
                  "model": "Age",
                  "properties": {
                    "wrapper": {
                      "classes": [],
                      "styles": [
                        {
                          "name": "flex",
                          "value": "0 1 100%"
                        }
                      ]
                    },
                    "element": {
                      "classes": [],
                      "styles": []
                    }
                  }
                }
              ],
              "properties": {
                "container": {
                  "classes": [
                    "flex_column"
                  ],
                  "styles": [
                    {
                      "name": "flex",
                      "value": "0 1 100%"
                    },
                    {
                      "name": "border",
                      "value": "1px dotted #000"
                    },
                    {
                      "name": "padding",
                      "value": "6px"
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "children": [
            {
              "model": "stacked",
              "type": "stacked-component",
              "children": [
                {
                  "type": "paragraph-component",
                  "model": "userList[table_body_column_index].name",
                  "properties": {
                    "wrapper": {
                      "classes": [],
                      "styles": [
                        {
                          "name": "flex",
                          "value": "0 1 100%"
                        }
                      ]
                    },
                    "element": {
                      "classes": [],
                      "styles": []
                    }
                  }
                }
              ],
              "properties": {
                "container": {
                  "classes": [
                    "flex_column"
                  ],
                  "styles": [
                    {
                      "name": "flex",
                      "value": "0 1 100%"
                    },
                    {
                      "name": "border",
                      "value": "1px dotted #000"
                    },
                    {
                      "name": "padding",
                      "value": "6px"
                    }
                  ]
                }
              }
            },
            {
              "model": "stacked",
              "type": "stacked-component",
              "children": [
                {
                  "type": "paragraph-component",
                  "model": "userList[table_body_column_index].age",
                  "properties": {
                    "wrapper": {
                      "classes": [],
                      "styles": [
                        {
                          "name": "flex",
                          "value": "0 1 100%"
                        }
                      ]
                    },
                    "element": {
                      "classes": [],
                      "styles": []
                    }
                  }
                }
              ],
              "properties": {
                "container": {
                  "classes": [
                    "flex_column"
                  ],
                  "styles": [
                    {
                      "name": "flex",
                      "value": "0 1 100%"
                    },
                    {
                      "name": "border",
                      "value": "1px dotted #000"
                    },
                    {
                      "name": "padding",
                      "value": "6px"
                    }
                  ]
                }
              }
            }
          ]
        }
      ],
      "properties": {
        "wrapper": {
          "classes": [],
          "styles": []
        },
        "row_header": {
          "styles": []
        },
        "column_header": {
          "styles": []
        },
        "row_body": {
          "styles": []
        },
        "column_body": {
          "styles": []
        },
        "element": {
          "classes": [
            "table",
            "table-bordered"
          ],
          "styles": [
            {
              "name": "flex",
              "value": "0 1 100%"
            },
            {
              "name": "margin",
              "value": "0"
            }
          ]
        }
      }
    }
  ],
  "properties": {
    "container": {
      "classes": [
        "flex_column"
      ],
      "styles": [
        {
          "name": "flex",
          "value": "0 1 100%"
        },
        {
          "name": "border",
          "value": "1px dotted #000"
        },
        {
          "name": "padding",
          "value": "6px"
        }
      ]
    }
  }
}