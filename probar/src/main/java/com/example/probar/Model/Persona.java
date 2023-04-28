package com.example.probar.Model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity

public class Persona {
    
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private Long id;
    private String nombre;
    private String apellido;
    private int edad;
    
}
