import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => InputTextComponent)
  }]
})
export class InputTextComponent implements ControlValueAccessor {
  value!:string;
  disabled = false;
  onChange:any;
  onTouched:any;

  writeValue(val:any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}
