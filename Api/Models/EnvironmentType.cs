using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class EnvironmentType
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<StarSystem> StarSystems { get; set; }
    }
}