import React from 'react';
import { mount, unmount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and two buttons', () => {		
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
	let comment;
	
	beforeEach(() => {
		comment = 'new comment';
		wrapped.find('textarea').simulate('change', {
			target: { value: comment }
		});
		wrapped.update();
	});
	
	it('has a text area that users can type in', () => {		
		expect(wrapped.find('textarea').prop('value')).toEqual(comment);
	});

	it('when form is submitted, test area gets emptied', () => {		
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});

