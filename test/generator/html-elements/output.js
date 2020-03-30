Foo.propTypes = {
	bothTypes: PropTypes.oneOfType([
		function (props, propName) {
			var node = props[propName];

			if (node == null) {
				return new Error("Prop '" + propName + "' is required but wasn't specified");
			}

			var ownerWindow = null;
			if (node.toString() !== '[object Window]') {
				var ownerDocument = node.ownerDocument;
				ownerWindow = ownerDocument ? ownerDocument.defaultView : window;
			} else {
				ownerWindow = node;
			}

			if (node instanceof ownerWindow.Element || node instanceof Element) {
				return null;
			}

			return new Error(
				"The element provided to '" + propName + "' is not an instance of 'Element'"
			);
		},
		function (props, propName) {
			var node = props[propName];

			if (node == null) {
				return new Error("Prop '" + propName + "' is required but wasn't specified");
			}

			var ownerWindow = null;
			if (node.toString() !== '[object Window]') {
				var ownerDocument = node.ownerDocument;
				ownerWindow = ownerDocument ? ownerDocument.defaultView : window;
			} else {
				ownerWindow = node;
			}

			if (node instanceof ownerWindow.HTMLElement || node instanceof HTMLElement) {
				return null;
			}

			return new Error(
				"The element provided to '" + propName + "' is not an instance of 'HTMLElement'"
			);
		},
	]).isRequired,
	element: function (props, propName) {
		var node = props[propName];

		if (node == null) {
			return new Error("Prop '" + propName + "' is required but wasn't specified");
		}

		var ownerWindow = null;
		if (node.toString() !== '[object Window]') {
			var ownerDocument = node.ownerDocument;
			ownerWindow = ownerDocument ? ownerDocument.defaultView : window;
		} else {
			ownerWindow = node;
		}

		if (node instanceof ownerWindow.Element || node instanceof Element) {
			return null;
		}

		return new Error("The element provided to '" + propName + "' is not an instance of 'Element'");
	},
	htmlElement: function (props, propName) {
		var node = props[propName];

		if (node == null) {
			return new Error("Prop '" + propName + "' is required but wasn't specified");
		}

		var ownerWindow = null;
		if (node.toString() !== '[object Window]') {
			var ownerDocument = node.ownerDocument;
			ownerWindow = ownerDocument ? ownerDocument.defaultView : window;
		} else {
			ownerWindow = node;
		}

		if (node instanceof ownerWindow.HTMLElement || node instanceof HTMLElement) {
			return null;
		}

		return new Error(
			"The element provided to '" + propName + "' is not an instance of 'HTMLElement'"
		);
	},
	optional: function (props, propName) {
		var node = props[propName];

		if (node == null) {
			return null;
		}

		var ownerWindow = null;
		if (node.toString() !== '[object Window]') {
			var ownerDocument = node.ownerDocument;
			ownerWindow = ownerDocument ? ownerDocument.defaultView : window;
		} else {
			ownerWindow = node;
		}

		if (node instanceof ownerWindow.Element || node instanceof Element) {
			return null;
		}

		return new Error("The element provided to '" + propName + "' is not an instance of 'Element'");
	},
};
