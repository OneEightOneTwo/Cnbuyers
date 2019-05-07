import axios from 'axios';
import React, { Component } from 'react';

export default function(Com) {
	return class XXX extends Component {
		render() {
			return <Com axios={axios} />
		}
	}
}
