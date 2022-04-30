export interface DropdownProps {
	// add it here
	readonly dropdownRef? : React.RefObject <HTMLSelectElement>;
}

// see the interface used on the next line!
public constructor(props: DropdownProps) {
	super(props);
	// needs to be here
	this.dropdown = React.createRef<HTMLSelectElement>();
}

// here is the implementation
// note innerRef
<StyledDropdown
	disabled={disabled}
	required={required}
	// This is needed because styled components assumes that a ref is
	// a combination of string and React.RefObject<HTMLSelectElement>.
	// With a normal select it is just React.RefObject<HTMLSelectElement>
	innerRef={this.dropdown as string & React.RefObject<HTMLSelectElement>}

	value={value}
	onChange={this.handleChange}
	onBlur={this.handleBlur}
	onFocus={this.handleFocus}
	appearance={appearance}
	errorText={errorText}
	name={name}
>
	<option disabled value="">
		{placeholder ? placeholder : ''}
	</option>
	{children}
</StyledDropdown>


// here is just an example implementation where the above is used further...
private focusDropdown(): void {
	const focused = document.activeElement;
	const ddnode = this.dropdown.current;
	if (ddnode) {
		ddnode.focus();
		if (!focused.isEqualNode(ddnode)) {
			window.requestAnimationFrame(this.focusDropdown);
		}
	}
}

// in summary...
// 1. add the ref to interface (if using TS)
// 2. define in constructor
// 3. add ref or innerRef to component




