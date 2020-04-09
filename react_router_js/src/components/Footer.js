import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer>
                <div className="container">
                    <p>© Your Website 2019. All Rights Reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">Privacy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">Terms</a>
                        </li>
                        <li className="list-inline-item">
                            <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">FAQ</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;