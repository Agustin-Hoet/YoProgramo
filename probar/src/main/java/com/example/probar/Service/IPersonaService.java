package com.example.probar.Service;

public interface IPersonaService {
    
    public List<Persona> getPersonas();
    
    public void savePersona(Persona perso);
    
    public void deletePersona(Long id);
    
    public Persona findPersona(Long id);
    
}
