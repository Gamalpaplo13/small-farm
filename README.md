# Node Farm

## Overview

This project is a simple Node.js server that serves dynamic HTML pages and JSON data based on user requests. It uses `http` for server creation, `fs` for file operations, `url` for parsing requests, and `slugify` to generate slugs from product names.

## Installation

1. **Clone the repository**:

    ```bash
    git clone (https://github.com/gamalgaber/small-farm.git)
    ```

2. **Navigate to the project directory**:

    ```bash
    cd <repository-directory>
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Start the server**:

    ```bash
    npm run start
    ```

2. **Open your browser and navigate to the following URLs to view different pages**:

    - Overview page: [http://localhost:8000/](http://localhost:8000/)

## Functionality

- **Overview Page**: Displays a list of products with cards generated from the `template-card.html` template.
- **Product Page**: Displays details for a single product based on the `id` query parameter. Uses the `template-product.html` template.
- **API Page**: Serves the product data in JSON format.

## Notes

- Ensure that the `data.json` file is correctly formatted and located in the `/dev-data/` directory.
- The `replacetemplate.js` module is used to replace placeholders in the HTML templates with actual product data.

## Contributing

Feel free to fork the repository and submit pull requests. For significant changes, please open an issue to discuss the changes before implementing them.

## License

This project is licensed under the MIT License

## Acknowledgments

- Node.js for the runtime environment.
- The [slugify](https://www.npmjs.com/package/slugify) package for generating slugs.

