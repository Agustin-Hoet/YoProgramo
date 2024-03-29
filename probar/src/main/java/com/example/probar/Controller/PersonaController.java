package com.example.probar.Controller;

import org.springframewor.web.bind.annotation.GetMapping;
import org.springframewor.web.bind.annotation.PathVariable;
import org.springframewor.web.bind.annotation.RestController;


@RestController
public class PersonaController {
    
    @Autowired
    private IPersonaService interpersona;
    
    @GetMapping ("/personas/traer") 
    public List<Persona> getPersonas() {
        return interpersona.getPersonas();
    }
    
    @PostMapping ("/personas/crear") 
    public String createStudent (@RequestBody Persona perso) {
        
        interPersona.savePersona (perso);
        return "La persona fue creada correctamente";
    }
    
    @DeleteMapping ("/personas/borrar/{id}") 
    public String deletePersona (@PathVariable Long id) {
        interPersona.deletePersona(id);
        return "La persona fue eliminada correctamente";
    }
    
    @PutMapping ("personas/editar/{id}") 
    public Persona editPersona (@PathVariable Long id,
                                @RequestParam ("nombre") String nuevoNombre,
                                @RequestParam ("apellido") String nuevoApellido,
                                @RequestParam ("edad") int nuevaEdad) 
        {
            Persona perso = interPersona.findPersona(id);
            
            perso.setApellido (nuevoApellido);
            perso.setNombre (nuevoNombre);
            perso.setEdad (nuevaEdad);
            
            interPersona.savePersona (perso);
            
            return perso; 
        }
  
}



