/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var randu = require( '@stdlib/random-base-randu' );
var pdf = require( './../lib' );

var alpha;
var s;
var m;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
	alpha = randu() * 10.0;
	x = randu() * 10.0;
	s = randu() * 10.0;
	m = randu() * 10.0;
	y = pdf( x, alpha, s, m );
	console.log( 'x: %d, α: %d, s: %d, m: %d, f(x;α,s,m): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
