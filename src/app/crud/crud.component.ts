import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ReservaModel } from '../../model/reserva';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ RouterOutlet,ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  
  ObjReserva:ReservaModel = new ReservaModel();
  ReservaForm:FormGroup = new FormGroup({});
  ReservaList:ReservaModel[] = [];

  constructor()
  {
    this.createReserva();
    const oldData = localStorage.getItem("Reservas");
    if(oldData!=null)
    {
      //Convirtiendo los datos a JSON 
      const parseData = JSON.parse(oldData);
      this.ReservaList = parseData;
    }

  }

  createReserva()
  {
    this.ReservaForm = new FormGroup({
      ID: new FormControl(this.ObjReserva.ID),
      Nombre: new FormControl(this.ObjReserva.Nombre, [Validators.required]),
      Tour: new FormControl(this.ObjReserva.Tour, [Validators.required]),
      Fecha: new FormControl(this.ObjReserva.Fecha, [Validators.required]),
    });  
  }

  onSave(){
    const oldData = localStorage.getItem("Reservas");
    if(oldData!=null)
    {
      //Convierte datos a JSON???
      const parseData = JSON.parse(oldData);
      this.ReservaForm.controls['ID'].setValue(parseData.length+1);
      //Guardar en la lista
      this.ReservaList.unshift(this.ReservaForm.value);
    }
    else
    {
      this.ReservaList.unshift(this.ReservaForm.value);
    }
    //Guardar registro en almacenamiento local
    localStorage.setItem("Reservas", JSON.stringify(this.ReservaList));
    this.limpiar();
  }

  onEdit(item:ReservaModel)
  {
    this.ObjReserva=item;
    this.createReserva();
  }

  limpiar(){
    this.ObjReserva=new ReservaModel;
    this.createReserva();
  }

  onUpdate()
  {
    const registro = this.ReservaList.find(m=>m.ID == this.ReservaForm.controls['ID'].value);
    if(registro != undefined){
      registro.Nombre = this.ReservaForm.controls['Nombre'].value;
      registro.Tour = this.ReservaForm.controls['Tour'].value;
      registro.Fecha = this.ReservaForm.controls['Fecha'].value;
    }
    localStorage.setItem("Reservas", JSON.stringify(this.ReservaList));
    this.limpiar();
  }

  onDelete(ID:number){
    const borrar = confirm("¿Está seguro de eliminar este registro?");
    if (borrar) 
      {
      //Recuperar id del registro a eliminar
      const indice = this.ReservaList.findIndex(m=>m.ID ==ID);
      //Elimina el registro de la lista
      this.ReservaList.splice(indice,1);
    }
    localStorage.setItem("Reservas", JSON.stringify(this.ReservaList));
  }

}
